import './App.css';
import CompStyle from './containers/styled/CompStyle';
import CrudContainer from './containers/crud/CrudContainer';
import PageHome from './pages/PageHome';
import PageLogin from './pages/PageLogin';
// 여러 상태의 로그인을 위해 라우트 분기 처리

function App() {
  return (
    <div>
      <PageHome />
    </div>
  );
}

export default App;
