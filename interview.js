var people = [
    { name: "p1", city: "c1" },
    { name: "p2", city: "c2" },
    { name: "p3", city: "c1" },
    { name: "p4", city: "c4" },
  ];
  
  var result = {};
  people.forEach((e) => {
    if (!result[e.city]) {
      result[e.city] = [];
    }
    result[e.city].push(e.name);
  });
  console.log(result);
  