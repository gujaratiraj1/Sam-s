#!/usr/bin/env python3
import csv
import os
import re

ROOT = os.path.dirname(os.path.dirname(__file__))
CSV = os.path.join(ROOT, 'seo', 'keyword-master-bangalore.csv')
REPORT = os.path.join(ROOT, 'seo', 'seo_indexing_report.txt')

pages_checked = {}
missing_pages = set()

# Read CSV
rows = []
with open(CSV, newline='', encoding='utf-8') as f:
    reader = csv.DictReader(f)
    for r in reader:
        rows.append(r)

# For each row check suggested_page existence and whether keyword appears in page
report_lines = []
report_lines.append('SEO indexing audit report\n')
report_lines.append(f'Total keywords: {len(rows)}\n\n')

for r in rows:
    keyword = r['keyword'].strip().strip('"')
    page = r['suggested_page'].strip()
    priority = r.get('priority','').strip()

    # Handle anchors like services.html#modular-kitchens
    base_page = page.split('#')[0]
    anchor = page.split('#')[1] if '#' in page else None
    page_path = os.path.join(ROOT, base_page)

    exists = os.path.exists(page_path)
    if not exists:
        missing_pages.add(page)
        report_lines.append(f'MISSING PAGE: {page} -> keyword: "{keyword}" (priority: {priority})\n')
        continue

    # Read file and search for keyword (case-insensitive) in title/h1/content/meta description
    with open(page_path, 'r', encoding='utf-8') as pf:
        content = pf.read().lower()
        found_in_title = bool(re.search(r'<title>.*' + re.escape(keyword.lower()) + r'.*</title>', content))
        found_in_h1 = bool(re.search(r'<h1[^>]*>.*' + re.escape(keyword.lower()) + r'.*</h1>', content))
        found_any = keyword.lower() in content

        found_anchor = False
        if anchor:
            found_anchor = bool(re.search(r'id=["\']{}["\']'.format(re.escape(anchor)), content)) or bool(re.search(r"id={}".format(re.escape(anchor)), content))

        report_lines.append(f'PAGE: {page} | keyword: "{keyword}" | exists: yes | title_match: {found_in_title} | h1_match: {found_in_h1} | anywhere: {found_any} | anchor_found: {found_anchor} | priority: {priority}\n')

# Summary
report_lines.append('\nSummary\n')
report_lines.append(f'Pages missing: {len(missing_pages)}\n')
for p in sorted(missing_pages):
    report_lines.append(' - ' + p + '\n')

# Save report
with open(REPORT, 'w', encoding='utf-8') as outf:
    outf.writelines(report_lines)

print('Report written to', REPORT)
