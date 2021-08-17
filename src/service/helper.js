import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  "https://npvpjoqnzsilxgrmxqjv.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYyOTE4MjIwNiwiZXhwIjoxOTQ0NzU4MjA2fQ._SakuJ44a6RS4Nzj-DqoyqmU9OWWPYogsQz1fWffRt4"
);

export async function insertData(email,msg) {
  const { data, error } = await supabase
  .from('Msg')
  .insert([{ Email: email, Msg: msg }]);
  console.log(data);
}