-- CreateTable
CREATE TABLE "service" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "duration_min" INTEGER NOT NULL,
    "base_price_cents" INTEGER NOT NULL,
    "active" BOOLEAN NOT NULL DEFAULT true
);

-- CreateTable
CREATE TABLE "addon" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "price_cents" INTEGER NOT NULL DEFAULT 0,
    "duration_min" INTEGER NOT NULL DEFAULT 0,
    "active" BOOLEAN NOT NULL DEFAULT true
);

-- CreateTable
CREATE TABLE "booking" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "customer_name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "service_id" TEXT NOT NULL,
    "add_on_ids" TEXT NOT NULL DEFAULT '[]',
    "start_at_utc" DATETIME NOT NULL,
    "end_at_utc" DATETIME NOT NULL,
    "address" TEXT NOT NULL,
    "notes" TEXT,
    "status" TEXT NOT NULL,
    "price_cents" INTEGER NOT NULL,
    "stripe_payment_intent_id" TEXT,
    "gcal_event_id" TEXT,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "booking_service_id_fkey" FOREIGN KEY ("service_id") REFERENCES "service" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "unavailability" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "start_at_utc" DATETIME NOT NULL,
    "end_at_utc" DATETIME NOT NULL,
    "reason" TEXT
);

-- CreateTable
CREATE TABLE "sms_log" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "booking_id" TEXT,
    "direction" TEXT NOT NULL,
    "to_number" TEXT NOT NULL,
    "body" TEXT NOT NULL,
    "status" TEXT,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "sms_log_booking_id_fkey" FOREIGN KEY ("booking_id") REFERENCES "booking" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "payment" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "booking_id" TEXT NOT NULL,
    "amount_cents" INTEGER NOT NULL,
    "status" TEXT NOT NULL,
    "provider_ref" TEXT,
    "paid_at" DATETIME,
    CONSTRAINT "payment_booking_id_fkey" FOREIGN KEY ("booking_id") REFERENCES "booking" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
