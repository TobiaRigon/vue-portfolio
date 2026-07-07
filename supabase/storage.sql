-- Bucket per le immagini dei progetti, caricate dal pannello admin.
-- Da eseguire una volta nel SQL Editor del progetto Supabase, dopo schema.sql.

insert into storage.buckets (id, name, public)
values ('project-images', 'project-images', true)
on conflict (id) do nothing;

-- Il bucket è "public" quindi gli oggetti sono leggibili via URL diretto senza
-- bisogno di una policy di SELECT; restano comunque da proteggere le scritture.
create policy "project_images_authenticated_insert"
  on storage.objects for insert
  to authenticated
  with check (bucket_id = 'project-images');

create policy "project_images_authenticated_update"
  on storage.objects for update
  to authenticated
  using (bucket_id = 'project-images')
  with check (bucket_id = 'project-images');

create policy "project_images_authenticated_delete"
  on storage.objects for delete
  to authenticated
  using (bucket_id = 'project-images');
