type Human = {
  name: string;
  gender: string;
}

type MyFamily<Parent = Human, Child = Human> = {
  father: Parent;
  mother: Parent;
  child: Child;
}

// 引数を省略した場合はデフォルトの型が適用される
const sypFamily: MyFamily = {
  father: { name: 'Loid', gender: 'male' },
  mother: { name: 'Yor', gender: 'female' },
  child: { name: 'Anya', gender: 'female' },
}

// 引数を与えた場合
const sypFamilyNames: MyFamily<string, string> = {
  father: 'Loid',
  mother: 'Yor',
  child: 'Anya',
}
