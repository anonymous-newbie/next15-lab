import { saveMessage } from './actions';

export default function ActionPage() {
  return (
    <form action={saveMessage}>
      <input type="text" name="message" />

      <button>Save</button>
    </form>
  );
}
