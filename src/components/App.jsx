import Editor from './Editor';

const app = () => (
  <div className="container">
    <nav>
      <ul>
        <li className="title">
          <a href="./">Simple Icon Generator</a>
        </li>
        <li className="right">
          Built by <a href="https://github.com/Raxvis">Raxvis</a>
        </li>
      </ul>
    </nav>
    <Editor />
  </div>
);

export default app;
