import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://idpcqdymoosdyullowcz.supabase.co"; // Ton URL Supabase
const supabaseAnonKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlkcGNxZHltb29zZHl1bGxvd2N6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDE1NDkzOTksImV4cCI6MjA1NzEyNTM5OX0.FRfyfCY2amgDqSckIjLglR6Zy3Cn8HvHwpcITambrFM"; // Ta clé API publique

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
