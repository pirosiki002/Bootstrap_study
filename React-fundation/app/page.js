import LikeButton from './like-button.js';

function Header({ title }) {
  return <h1>{title ? title : 'Default title'}</h1>;
}

export default function HomePage() {
  const names = ['Ada Lovelace', 'Grace Hopper', 'MargaretHamilton'];

  return (
    <div>
      <header title="Develop. Preview. Ship." />
      <ul>
        {names.map((name) => (
          <li key="{name}">{name}</li>
        ))}
      </ul>
      <LikeButton />
    </div>
  );
}
