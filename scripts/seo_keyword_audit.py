#!/usr/bin/env python3
"""
Simple keyword audit for the site's SEO keyword master.

Reads seo/keyword-master-bangalore.csv and checks whether each "suggested_page" contains the keyword.
If suggested_page includes a fragment (example: services.html#modular-kitchens) the script will also check just that section for a match.

Usage:
  python scripts/seo_keyword_audit.py --csv seo/keyword-master-bangalore.csv --out seo/keyword-audit-report.csv

Produces a CSV report with columns: keyword,suggested_page,found_in_page,found_in_section,count

"""
import csv
import argparse
import os
import re


def read_csv(path):
    rows = []
    with open(path, encoding='utf-8') as fh:
        reader = csv.DictReader(fh)
        for r in reader:
            rows.append(r)
    return rows


def load_page(path):
    if not os.path.exists(path):
        return None
    with open(path, encoding='utf-8', errors='ignore') as fh:
        return fh.read()


def find_section(text, fragment):
    # Find the section with id equal to fragment, return a window of HTML around it
    if not text:
        return None
    # simple regex to find id="fragment" or id='fragment'
    m = re.search(r"(<section[^>]*id=[\"']%s[\"'][\s\S]*?</section>)" % re.escape(fragment), text, re.I)
    if m:
        return m.group(1)
    # fallback: try to find the element with name anchor
    m = re.search(r"(<[^>]+name=[\"']%s[\"'][\s\S]*?</[^>]+>)" % re.escape(fragment), text, re.I)
    if m:
        return m.group(1)
    return None


def normalize_text(s):
    return re.sub(r'\s+', ' ', s or '').strip().lower()


def run_audit(csv_path, out_path):
    rows = read_csv(csv_path)
    results = []

    for r in rows:
        keyword = r['keyword'].strip()
        suggested = r.get('suggested_page', '').strip()
        page = suggested.split('#')[0] if suggested else ''
        fragment = suggested.split('#')[1] if '#' in suggested else None

        page_path = page if os.path.exists(page) else os.path.join(os.getcwd(), page)
        content = load_page(page)
        found_in_page = False
        count = 0
        found_in_section = False

        if content:
            text = normalize_text(content)
            kw = normalize_text(keyword)
            count = text.count(kw)
            found_in_page = count > 0

            if fragment:
                section_html = find_section(content, fragment)
                section_text = normalize_text(section_html)
                found_in_section = kw in section_text if section_text else False

        results.append({
            'keyword': keyword,
            'suggested_page': suggested,
            'found_in_page': 'yes' if found_in_page else 'no',
            'found_in_section': 'yes' if found_in_section else 'no',
            'count': count
        })

    # write report
    with open(out_path, 'w', newline='', encoding='utf-8') as outfh:
        writer = csv.DictWriter(outfh, fieldnames=['keyword', 'suggested_page', 'found_in_page', 'found_in_section', 'count'])
        writer.writeheader()
        for r in results:
            writer.writerow(r)

    return results


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument('--csv', default='seo/keyword-master-bangalore.csv')
    ap.add_argument('--out', default='seo/keyword-audit-report.csv')
    args = ap.parse_args()

    results = run_audit(args.csv, args.out)
    print('Wrote report to', args.out)
    # show a short summary
    missing = [r for r in results if r['found_in_page'] == 'no']
    print(f"{len(results)} keywords checked — {len(missing)} missing on their suggested page")


if __name__ == '__main__':
    main()
