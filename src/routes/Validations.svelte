<script>
  import { z } from "zod";
  
  // creating a schema for strings
  const mySchema = z.string();
  
  mySchema.safeParse("tuna"); // => { success: true; data: "tuna" }
  const result = mySchema.safeParse(12); // => { success: false; error: ZodError }
  
  if (!result.success) {
    console.log(result.error.issues[0].message);
  }
  
  let name = 'world';
  </script>

{#if result.success}
  <p>
    {result.data}
  </p>
{/if}