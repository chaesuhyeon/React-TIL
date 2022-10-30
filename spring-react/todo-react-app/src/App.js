import "./App.css";
import Todo from "./Todo";
import { useState, useEffect } from "react";
import { AppBar, Button, Grid, List, Paper, Toolbar, Typography } from "@mui/material";
import { Container } from "@mui/system";
import AddTodo from "./AddTodo";
import { call , signout} from "./service/ApiService";

function App() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    call("/todo", "GET", null)
      .then((response) => {
        setItems(response.data);
        setLoading(false);
      });
  }, []);

  const addItem = (item) => {
    call("/todo", "POST", item).then((response) => setItems(response.data));

    // item.id = "ID-" + items.length; // key를 위한 id
    // item.done = false; // done 초기화

    //업데이트는 반드시 setItems으로 하고 새 배열을 만들어야 한다.
    // setItems([...items, item]);
    // console.log("items : ", items);
  };

  const deleteItem = (item) => {
    call("/todo", "DELETE", item).then((response) => setItems(response.data));

    //삭제할 아이템을 찾는다.
    // const newItems = items.filter((e) => e.id !== item.id);

    //삭제할 아이템을 제외한 아이템을 다시배열에 저장
    // setItems([...newItems]);
  };

  const editItem = (item) => {
    call("/todo", "PUT", item).then((response) => setItems(response.data));
    // setItems([...items]);
  };

  let todoItems = items.length > 0 && (
    <Paper style={{ margin: 16 }}>
      <List>
        {items.map((item) => (
          <Todo
            item={item}
            key={item.id}
            editItem={editItem}
            deleteItem={deleteItem}
          />
        ))}
      </List>
    </Paper>
  );

  //navigationBar
  let navigationBar = (
    <AppBar position="static">
      <Toolbar>
        <Grid justifyContent="space-between" container>

          <Grid item>
            <Typography variant="h6">오늘의 할일</Typography>
          </Grid>

          <Grid item>
            <Button color="inherit" raised onClick={signout} >
              로그아웃
            </Button>
          </Grid>

        </Grid>
      </Toolbar>
    </AppBar>
  );

  /* 로딩중이 아닐 때 랜더링할 부분 */
  let todoListPage = (
    <div>
      {navigationBar} {/* 네이게이션 바 랜더링 */}
      <Container maxWidth="md">
        <AddTodo addItem={addItem} />
        <div className="TodoList">{todoItems}</div>
      </Container>
    </div>
  );

  /* 로딩중일 때 랜더링할 부분 */
  let loadingPage = <h1> 로딩중 ..</h1>;
  let content = loadingPage;

  if(!loading){
    /* 로딩중이 아니면 todoListPage를 선택 */
    content = todoListPage;
  }

  /* 선택한 content 랜더링 */
  return (
    <div className="App">
      {content}
    </div>
  );
}

export default App;
