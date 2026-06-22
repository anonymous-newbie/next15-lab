'use server';

export async function saveMessage(formData: FormData) {
  const msg = formData.get('message');

  console.log('message:', msg);
}
