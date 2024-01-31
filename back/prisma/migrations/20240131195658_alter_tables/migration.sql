/*
  Warnings:

  - You are about to drop the column `bank` on the `BankTransaction` table. All the data in the column will be lost.
  - You are about to drop the column `bankId` on the `BankTransaction` table. All the data in the column will be lost.
  - You are about to drop the column `type` on the `BankTransaction` table. All the data in the column will be lost.
  - You are about to drop the column `monthly_income` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `profession` on the `User` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_BankTransaction" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "userId" INTEGER,
    "bankAccountId" INTEGER,
    "value" REAL NOT NULL,
    "date" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "description" TEXT NOT NULL,
    "category" TEXT,
    "direction" TEXT NOT NULL,
    "implemented" BOOLEAN NOT NULL DEFAULT false,
    "paymentMethod" TEXT,
    CONSTRAINT "BankTransaction_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "BankTransaction_bankAccountId_fkey" FOREIGN KEY ("bankAccountId") REFERENCES "BankAccount" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_BankTransaction" ("date", "description", "direction", "id", "value") SELECT "date", "description", "direction", "id", "value" FROM "BankTransaction";
DROP TABLE "BankTransaction";
ALTER TABLE "new_BankTransaction" RENAME TO "BankTransaction";
CREATE TABLE "new_User" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "email" TEXT NOT NULL,
    "first_name" TEXT NOT NULL,
    "second_name" TEXT,
    "password" TEXT NOT NULL
);
INSERT INTO "new_User" ("email", "first_name", "id", "password") SELECT "email", "first_name", "id", "password" FROM "User";
DROP TABLE "User";
ALTER TABLE "new_User" RENAME TO "User";
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
