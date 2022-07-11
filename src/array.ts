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

const users: User[] = translateToUsersFromCSV(data)

function translateToUsersFromCSV (data: string): User[] {
  return data.trim().split('\n')
          .map(user => {
            const [name, ageString, premiumUserString] = user.split(',')

            return {
              name,
              age: Number(ageString),
              premiumUser: premiumUserString === '1'
            }
          })
}

for (const user of users) {
  if (user.premiumUser) {
    console.log(`${user.name} (${user.age}はプレミアムユーザーです。)`)
  } else {
    console.log(`${user.name} (${user.age})はプレミアムユーザーではありません。`)
  }
}
