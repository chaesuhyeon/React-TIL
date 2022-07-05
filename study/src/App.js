import './App.css';


function Nav(props) {
  const lis = []

  for(let i=0;i<props.topics.length;i++) {
    let t = props.topics[i];
    lis.push(<li key={t.id}>
      <a id={t.id} href={'/read/' + t.id} onClick={(event)=>{
        event.preventDefault();
        props.onChangeMode(event.target.id);
              }}>{t.title}</a>
      </li>);
  }
  return       <nav>
  <ol>
    {lis}
  </ol>
</nav>
}

function Article(props) {
  return       <article>
  <h2>{props.title}</h2>
  {props.body}
</article>
}

function Header(props) {
  return       <header>
  <h1><a href='/' onClick={(event) => {
    event.preventDefault();
    props.onChangeMode();
  }}>{props.title}</a></h1>
</header>
}


function App() {
  const mode = 'WELCOME';
  // const mode = 'READ';

  const topics = [
    {id: 1, title :'html' , body :'html is ...'} ,
    {id: 2, title :'css' , body :'css is ...'} ,
    {id: 3, title :'js' , body :'js is ...'} 
]

  let content = null;

  if(mode === 'WELCOME') {
      content = <Article title="Welcome" body="Hello, WEB"/>
  } else if(mode === 'READ') {
      content = <Article title="READ" body="Hello, WEB"/>
  }
    
  return (
    <div>
      <Header title="WEB" onChangeMode={()=>{
        alert('Header');
      }}/>
      <Nav topics={topics} onChangeMode={(id)=>{
        alert(id);
      }}></Nav>
      {content}
      {/* <Article title="Welcome" body="Hello, WEB"/> */}
    </div>
  );
}

export default App;
