// src/utils/useProjects.js

export async function loadProjectsFromCSV(sheetId) {
    const url = `https://docs.google.com/spreadsheets/d/e/${sheetId}/pub?output=csv`;
  
    const res = await fetch(url);
    const csvText = await res.text();
    const rows = csvText.trim().split("\n");
    const headers = splitCSVLine(rows[0]);
  
    const projects = rows.slice(1).map((line) => {
      const values = splitCSVLine(line);
      const entry = {};
  
      headers.forEach((header, i) => {
        const cleanHeader = header.trim();
        let value = values[i] || "";
  
        if (cleanHeader === "images") {
          entry[cleanHeader] = value
            .split(";")
            .map((img) => img.trim())
            .filter(Boolean);
        } else {
          entry[cleanHeader] = value;
        }
      });
  
      return entry;
    });
  
    return projects;
  }
  
  function splitCSVLine(line) {
    const result = [];
    let current = "";
    let insideQuotes = false;
  
    for (let i = 0; i < line.length; i++) {
      const char = line[i];
      const next = line[i + 1];
  
      if (char === '"' && insideQuotes && next === '"') {
        current += '"';
        i++;
      } else if (char === '"') {
        insideQuotes = !insideQuotes;
      } else if (char === "," && !insideQuotes) {
        result.push(current);
        current = "";
      } else {
        current += char;
      }
    }
    result.push(current);
    return result;
  }
  