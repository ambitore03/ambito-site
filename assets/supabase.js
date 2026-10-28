/* Shared Supabase connection for the Ámbito site.
   The anon key below is safe to be public — it only grants what the
   row-level security rules in the database allow (public read of
   published listings; writes require an admin login). */
const SUPABASE_URL = "https://xzsaaxjetumcbfuaghby.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inh6c2FheGpldHVtY2JmdWFnaGJ5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTMwMzkzNzYsImV4cCI6MjEwODYxNTM3Nn0.ypxSAGLN2b0AteIuyA8fYlnLlRTI4qxOa_oF8icHfrY";

const sb = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
