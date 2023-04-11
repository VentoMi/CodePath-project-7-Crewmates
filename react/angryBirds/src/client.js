import { createClient } from '@supabase/supabase-js'

const URL = 'https://xmfmeutwwzdpavqjigik.supabase.co'
const API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhtZm1ldXR3d3pkcGF2cWppZ2lrIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODA5ODQ4OTgsImV4cCI6MTk5NjU2MDg5OH0.qaRgyLLKWhbygW1TJ2RMPcPZeIMGuq9YCFCZPY_ZOKM'

export const supabase = createClient(URL, API_KEY);