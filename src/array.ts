type User = {
  name: string;
  age: number;
  premiumUser: boolean;
}

const data: string = `
uhyo,26,1
John Smith,17,0
Mary Sue,14,1
`

const usersInfo = extractUserInfo(data)
const users = translateUserInfo(usersInfo)


function extractUserInfo (data: string): string[][] {
  return data.trim().split('\n').map((user) => {
    return user.split(',')
  })
}

function translateUserInfo (usersData: string[][]): User[] {
  const users: User[] = []
  for (const [name, age, premiumUser] of usersData) {
    users.push({
      name,
      age: Number(age),
      premiumUser: premiumUser === '1' ? true : false
    })
  }
  return users
}

for (const user of users) {
  if (user.premiumUser) {
    console.log(`${user.name} (${user.age}はプレミアムユーザーです。)`)
  } else {
    console.log(`${user.name} (${user.age})はプレミアムユーザーではありません。`)
  }
}
