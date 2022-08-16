import { readFileSync, writeFileSync } from "fs";
import pgk from 'papaparse';
const { parse } = pgk;
//convert csv to json using javascript
try {
    const csvFile = readFileSync("./databases/testData.csv", "utf8");
    const csvResults = parse(csvFile, {
        header: true,
        complete: csvData => csvData.data
    }).data;
    writeFileSync(
        "./databases/db-csv.json",
        JSON.stringify(csvResults, null, 4),
        "utf-8"
    );
} catch (e) {
    throw Error(e);
}