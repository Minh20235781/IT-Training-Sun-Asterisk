const fs = require('fs');

const APP_ID = 'latency';
const API_KEY = '6be0576ff61c053d5f9a3225e2a90f76';
const INDEX_NAME = 'instant_search';
const HITS_PER_PAGE = 1000; // Algolia giới hạn tối đa 1000/page
const MAX_PAGES = 5; // lấy ~ vài nghìn sản phẩm, chỉnh tuỳ nhu cầu

async function fetchPage(page) {
  const url = `https://${APP_ID}-dsn.algolia.net/1/indexes/*/queries?x-algolia-agent=Algolia%20for%20JavaScript&x-algolia-api-key=${API_KEY}&x-algolia-application-id=${APP_ID}`;

  const body = {
    requests: [
      {
        indexName: INDEX_NAME,
        hitsPerPage: HITS_PER_PAGE,
        page,
        query: '',
      },
    ],
  };

  const res = await fetch(url, {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify(body),
  });

  if (!res.ok) {
    throw new Error(`Fetch page ${page} failed: ${res.status}`);
  }

  const data = await res.json();
  return data.results[0]; // { hits, nbHits, nbPages, page, ... }
}

async function main() {
  let allHits = [];
  let nbPages = 1;

  for (let page = 0; page < MAX_PAGES; page++) {
    const result = await fetchPage(page);
    nbPages = result.nbPages;

    console.log(`Page ${page + 1}/${nbPages} — lấy ${result.hits.length} sản phẩm`);
    allHits = allHits.concat(result.hits);

    if (page >= nbPages - 1) break; // hết trang thì dừng sớm
  }

  fs.writeFileSync('./algolia-raw.json', JSON.stringify(allHits, null, 2));
  console.log(`\nĐã lưu ${allHits.length} sản phẩm vào algolia-raw.json`);
}

main().catch(console.error);