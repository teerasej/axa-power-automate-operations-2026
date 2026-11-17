<script setup lang="ts">
import { withBase } from 'vitepress'
</script>

<template>
  <div class="personal-connection-check">
    <p>A <strong>connection</strong> is the account the flow uses to open files or send email. Check <strong>every action in the table above</strong>, including actions inside branches:</p>
    <ol>
      <li>Open the action's <strong>Parameters → Change connection reference</strong>.</li>
      <li>Check the selected row shows <strong>Connected</strong>, your training email and the connection label assigned to you.</li>
      <li>If needed, select the radio button beside your identified personal connection. Reopen the panel to confirm it, then close the panel.</li>
      <li>Repeat for every listed action. Selecting one action's connection does not prove the others changed.</li>
    </ol>
    <p>If your connection is missing, use <a :href="withBase('/day-2/preparation#check-your-connection-account')">connection help</a>. Stop if the account is blank or ambiguous. Do not reconfigure a shared connection reference elsewhere.</p>
  </div>
</template>
