# Comprehensive End-to-End Test Plan: GreenKart - Online Veg & Fruit Store

## Executive Summary

This test plan provides full coverage for the GreenKart online store at [https://rahulshettyacademy.com/seleniumPractise/](https://rahulshettyacademy.com/seleniumPractise/). It includes all major user flows: product selection, cart management, checkout, order placement, and order confirmation. The plan also covers edge cases, error handling, and validation scenarios to ensure robust quality assurance.

---

## Table of Contents

1. End-to-End Happy Path Scenarios
    - Add Product to Cart
    - Review Cart
    - Checkout and Place Order
    - Order Confirmation
2. Cart and Product Management
    - Update Item Quantity
    - Remove Item from Cart
    - Add Multiple Items
    - Search and Filter Products
3. Edge Cases & Boundary Conditions
    - Add Zero Quantity
    - Add Maximum Quantity
    - Add Same Item Multiple Times
    - Search with No Results
    - Cart Persistence on Page Refresh
4. Error Handling & Validation
    - Invalid Quantity Input
    - Checkout with Empty Cart
    - Network Failure During Add to Cart
    - UI Element Disabled State
5. Order Review & History
    - Post-Order Home Redirection
    - Absence of Order History

---

## 1. End-to-End Happy Path Scenarios

### 1.1 Add Product to Cart
**Assumptions:** User is on homepage, cart is empty.
**Steps:**
1. Locate "Brocolli - 1 Kg".
2. Click "+" to set quantity to 1.
3. Click "ADD TO CART".
**Expected Outcome:** Product is added, cart icon shows 1 item, price updates.

### 1.2 Review Cart
**Steps:**
1. Click cart icon in header.
2. Review product, quantity, and price.
**Expected Outcome:** Cart displays correct product and price.

### 1.3 Checkout and Place Order
**Steps:**
1. Click "PROCEED TO CHECKOUT".
2. Review order summary.
3. Click "Place Order".
4. Select country (e.g., India).
5. Agree to Terms & Conditions.
6. Click "Proceed".
**Expected Outcome:** Order is placed, confirmation message appears.

### 1.4 Order Confirmation
**Steps:**
1. Observe confirmation: "Thank you, your order has been placed successfully".
**Expected Outcome:** User is redirected to home after confirmation.

---

## 2. Cart and Product Management

### 2.1 Update Item Quantity
**Steps:**
1. In cart, click "+" or "–" to change quantity.
**Expected Outcome:** Quantity and price update accordingly.

### 2.2 Remove Item from Cart
**Steps:**
1. Click "×" next to product in cart.
**Expected Outcome:** Item is removed, cart updates.

### 2.3 Add Multiple Items
**Steps:**
1. Add several products to cart.
**Expected Outcome:** Cart lists all items, total price updates.

### 2.4 Search and Filter Products
**Steps:**
1. Enter product name in search box (e.g., "Tomato").
**Expected Outcome:** Only matching products are displayed.

---

## 3. Edge Cases & Boundary Conditions

### 3.1 Add Zero Quantity
**Steps:**
1. Set quantity to zero, try to add to cart.
**Expected Outcome:** Item not added, error/validation shown.

### 3.2 Add Maximum Quantity
**Steps:**
1. Set quantity to maximum allowed, add to cart.
**Expected Outcome:** Cart reflects max quantity, no errors unless limit exceeded.

### 3.3 Add Same Item Multiple Times
**Steps:**
1. Add same product repeatedly.
**Expected Outcome:** Quantity increases, not duplicated as separate items.

### 3.4 Search with No Results
**Steps:**
1. Enter non-existent product in search box.
**Expected Outcome:** No products shown, "No results found" message (if any).

### 3.5 Cart Persistence on Page Refresh
**Steps:**
1. Add items, refresh page.
**Expected Outcome:** Cart contents persist.

---

## 4. Error Handling & Validation

### 4.1 Invalid Quantity Input
**Steps:**
1. Enter negative or non-numeric value for quantity.
**Expected Outcome:** Input rejected, error shown.

### 4.2 Checkout with Empty Cart
**Steps:**
1. Attempt to checkout with empty cart.
**Expected Outcome:** Checkout blocked, error/warning shown.

### 4.3 Network Failure During Add to Cart
**Steps:**
1. Simulate network failure, add item to cart.
**Expected Outcome:** Operation fails gracefully, error shown.

### 4.4 UI Element Disabled State
**Steps:**
1. Try to click disabled "ADD TO CART" button (quantity zero).
**Expected Outcome:** Button not clickable, no action performed.

---

## 5. Order Review & History

### 5.1 Post-Order Home Redirection
**Steps:**
1. After order confirmation, observe redirection to home.
**Expected Outcome:** User lands on homepage, cart is reset.

### 5.2 Absence of Order History
**Steps:**
1. Look for order history or review feature after placing order.
**Expected Outcome:** No order history is available; user cannot review past orders.

---

## Notes
- All scenarios assume a fresh session and empty cart unless specified.
- Test on multiple browsers/devices for compatibility.
- Validate UI feedback and error messages for clarity.

---

**End of Comprehensive Test Plan**
