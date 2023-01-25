async function getData() {
  const result = await new Promise((resolve) => {
    setTimeout(() => {
      const userList = [
        {
          id: 1,
          first_name: '優',
          family_name: '大木',
          affilication: 'TechTrain',
          is_student: false,
        },
        {
          id: 2,
          first_name: '太郎',
          family_name: '山田',
          affilication: 'HogeHoge大学',
          is_student: true,
        },
      ]
      resolve(userList)
    }, 3000)
  })
  return result.map(buildFullName)

  function buildFullName(data) {
    var expect = new Object()
    let full_name_expect = data.family_name + ' ' + data.first_name

    expect.id = data.id
    expect.first_name = data.first_name
    expect.family_name = data.family_name
    expect.full_name = full_name_expect
    expect.affilication = data.affilication
    expect.is_student = data.is_student
    return expect
  }
}
getData()
