
-- Create table for academic materials
CREATE TABLE public.academia_materials (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID NOT NULL,
  title TEXT NOT NULL,
  description TEXT,
  type TEXT NOT NULL DEFAULT 'nota' CHECK (type IN ('curso', 'nota', 'guia')),
  price NUMERIC(10,2) NOT NULL DEFAULT 0,
  file_url TEXT,
  file_name TEXT,
  is_published BOOLEAN NOT NULL DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.academia_materials ENABLE ROW LEVEL SECURITY;

-- Anyone can view published materials
CREATE POLICY "Anyone can view published materials"
ON public.academia_materials FOR SELECT
USING (is_published = true);

-- Authenticated users can manage their own materials
CREATE POLICY "Authenticated users can insert their own materials"
ON public.academia_materials FOR INSERT
TO authenticated
WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Authenticated users can update their own materials"
ON public.academia_materials FOR UPDATE
TO authenticated
USING (auth.uid() = user_id);

CREATE POLICY "Authenticated users can delete their own materials"
ON public.academia_materials FOR DELETE
TO authenticated
USING (auth.uid() = user_id);

-- Authenticated users can also see their own unpublished materials
CREATE POLICY "Users can view their own unpublished materials"
ON public.academia_materials FOR SELECT
TO authenticated
USING (auth.uid() = user_id);

-- Timestamp trigger
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SET search_path = public;

CREATE TRIGGER update_academia_materials_updated_at
BEFORE UPDATE ON public.academia_materials
FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

-- Storage bucket for academia files
INSERT INTO storage.buckets (id, name, public) VALUES ('academia', 'academia', true);

-- Anyone can view files
CREATE POLICY "Anyone can view academia files"
ON storage.objects FOR SELECT
USING (bucket_id = 'academia');

-- Authenticated users can upload files
CREATE POLICY "Authenticated users can upload academia files"
ON storage.objects FOR INSERT
TO authenticated
WITH CHECK (bucket_id = 'academia');

-- Authenticated users can update their files
CREATE POLICY "Authenticated users can update academia files"
ON storage.objects FOR UPDATE
TO authenticated
USING (bucket_id = 'academia');

-- Authenticated users can delete their files
CREATE POLICY "Authenticated users can delete academia files"
ON storage.objects FOR DELETE
TO authenticated
USING (bucket_id = 'academia');
