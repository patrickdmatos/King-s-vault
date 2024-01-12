/*
  Warnings:

  - You are about to drop the column `bankAccountId` on the `BankTransaction` table. All the data in the column will be lost.
  - Added the required column `bank` to the `BankTransaction` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userId` to the `BankTransaction` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_BankTransaction" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "userId" INTEGER NOT NULL,
    "bank" TEXT NOT NULL,
    "value" REAL NOT NULL,
    "date" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "description" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "direction" TEXT NOT NULL,
    CONSTRAINT "BankTransaction_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_BankTransaction" ("date", "description", "direction", "id", "type", "value") SELECT "date", "description", "direction", "id", "type", "value" FROM "BankTransaction";
DROP TABLE "BankTransaction";
ALTER TABLE "new_BankTransaction" RENAME TO "BankTransaction";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
