// 매개변수를 2개 받아서, 첫번째 매개변수가 두번째 매개변수보다 크다면 더한 값을 return 하고, 그 역의 경우에는 뺀 값을 return 하는 calculate 함수를 만들어보세요,.
function calculater(x, y) {
  return x > y ? x + y : x < y ? x - y : 0; // 삼항 연산자
}
console.log(calculater(10, 10));
document.getElementById("root");
const Button = styled.button`
  color: white;
  background-color: blue;
  border: none;
  padding: 10px 20px;
  font-size: 16px;
  border-radius: 5px;
`;
