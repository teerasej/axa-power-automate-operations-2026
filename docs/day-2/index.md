---
title: Operations Day 2
prev: false
next:
  text: Start preparation
  link: /day-2/preparation
pageClass: day2-exercise
---

<script setup>
import { withBase } from 'vitepress'
</script>

# Operations Day 2: Repair, test and verify

Today you will repair prepared Flows for a fictional **Operations Request Desk**. Work with a partner: one person operates Power Automate and the other checks the result. Swap roles during the day.

<div class="day2-hero-actions">
  <a class="day2-download-button" :href="withBase('/day-2/day-2-workshop.zip')" download>Download complete Day 2 workshop (ZIP)</a>
  <a :href="withBase('/day-2/preparation')">Start preparation →</a>
</div>

**One ZIP: 8 starters + 8 working solutions + all 16 sample resources.** Extract the download and open **README.md**. Do not extract the inner solution ZIPs; import only your assigned START when the instructor announces that route. Practice files and reset copies are included in **files/**.

You already know triggers and actions. You do not need to build these Flows from scratch. Each exercise helps you find a small problem, make one repair and check what changed.

> **Shared class environment:** The instructor imports each starter once; your pair makes its own copy. Do not import the same solution for every pair. The [preparation guide](./preparation.md#start-your-assigned-flow) explains the starting routes.

## Learning path

| Time | Exercise | What you will produce |
|---|---|---|
| 09:00–10:30 | [1. Repair Relay](./exercises/01-repair-relay.md) | Two correct request rows and received emails |
| 10:30–10:45 | Break | |
| 10:45–12:00 | [2. Reliable Document Handoff](./exercises/02-document-handoff.md) | Two received emails with the correct readable PDFs |
| 12:00–13:00 | Lunch | |
| 13:00–14:30 | [3. Match, Close and Remind](./exercises/03-match-close-remind.md) | One outstanding request, then none after the final response |
| 14:30–14:45 | Break | |
| 14:45–16:00 | [4. Flow Rescue Challenge](./exercises/04-flow-rescue.md) | One repaired challenge and two checked tests per team |

The four blocks contain **330 teaching minutes**. In the last block, your team completes **one** of the five Rescue challenges.

## One diagnostic method

Use these five questions throughout the day:

1. **Expected:** What should happen?
2. **Actual:** What happened in the file, email or run?
3. **First difference:** Which action first produced the wrong value?
4. **Repair:** Which setting needs to change?
5. **Retest:** Does the same input now produce the correct result?

Think of a parcel delivery: a completed journey does not help if the parcel contains the wrong item. A green Flow run is a starting point; always check the delivered result.

## Before the first exercise

Complete the short [preparation checklist](./preparation.md). Each exercise then shows which files to upload and which settings to select. Do not prepare all five Rescue challenges; open only the card assigned to your team.

Use the supplied fictional data. Keep customer files and real project documents out of the exercises. Each core exercise has its own files, so an unfinished earlier exercise will not stop you from starting the next one.
