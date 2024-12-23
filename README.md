# React Native FlatList: Inconsistent `keyExtractor` causing rendering errors

This repository demonstrates a common error in React Native's `FlatList` component: using an incorrect or inconsistent `keyExtractor` function.  The `keyExtractor` function is essential for efficient updates; without it or an unreliable one, `FlatList` may fail to update correctly, leading to visual glitches or crashes.

## The Problem

Incorrectly using `keyExtractor` leads to React Native struggling to identify items for updates.  This usually results in `Invariant Violation` errors or other rendering issues.

## The Solution

The solution lies in providing a reliable `keyExtractor` function that consistently returns a unique key for each item in the data array. This key must remain consistent across renders; if an item's key changes unexpectedly, `FlatList` will be confused, leading to the error.  It is often best to use the item's unique identifier (such as an ID from your database) as the key.