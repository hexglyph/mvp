import fs from "fs"
import path from "path"
import { faker } from "@faker-js/faker"

import { labels, statuses } from "./data"

const files = Array.from({ length: 100 }, () => ({
  id: `file-${faker.datatype.number({ min: 1000, max: 9999 })}`,
  title: faker.hacker.phrase().replace(/^./, (letter) => letter.toUpperCase()),
  status: faker.helpers.arrayElement(statuses).value,
  label: faker.helpers.arrayElement(labels).value,
}))

fs.writeFileSync(
  path.join(__dirname, "files.json"),
  JSON.stringify(files, null, 2)
)
