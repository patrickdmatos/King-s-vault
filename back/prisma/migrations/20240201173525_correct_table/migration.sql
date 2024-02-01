/*
  Warnings:

  - You are about to drop the column `userId` on the `BankTransaction` table. All the data in the column will be lost.
  - Made the column `bankAccountId` on table `BankTransaction` required. This step will fail if there are existing NULL values in that column.
  - Made the column `category` on table `BankTransaction` required. This step will fail if there are existing NULL values in that column.
  - Made the column `paymentMethod` on table `BankTransaction` required. This step will fail if there are existing NULL values in that column.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_BankTransaction" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "bankAccountId" INTEGER NOT NULL,
    "value" REAL NOT NULL,
    "date" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "description" TEXT NOT NULL,
    "category" TEXT NOT NULL,
    "direction" TEXT NOT NULL,
    "implemented" BOOLEAN NOT NULL DEFAULT false,
    "paymentMethod" TEXT NOT NULL,
    CONSTRAINT "BankTransaction_bankAccountId_fkey" FOREIGN KEY ("bankAccountId") REFERENCES "BankAccount" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_BankTransaction" ("bankAccountId", "category", "date", "description", "direction", "id", "implemented", "paymentMethod", "value") SELECT "bankAccountId", "category", "date", "description", "direction", "id", "implemented", "paymentMethod", "value" FROM "BankTransaction";
DROP TABLE "BankTransaction";
ALTER TABLE "new_BankTransaction" RENAME TO "BankTransaction";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
