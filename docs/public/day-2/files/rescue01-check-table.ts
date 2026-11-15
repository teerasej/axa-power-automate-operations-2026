/**
 * Read-only table check for the Operations Request Desk exercise.
 * Save this as an Office Script before binding Run script in Power Automate.
 * This source file is not an importable Flow package.
 */
function main(workbook: ExcelScript.Workbook, tableName: string): number {
  const table = workbook.getTable(tableName);
  if (!table) {
    throw new Error(`Required table missing: ${tableName}`);
  }
  return table.getRowCount();
}
