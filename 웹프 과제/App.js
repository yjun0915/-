document.getElementById("click").addEventListener("click", () => {
  fetchData();
});

async function fetchData() {
  try {
    const response = await mockFetch("http://incheon/web");
    const data = await response.json();

    // Local storage에 데이터 저장
    localStorage.setItem("inuData", JSON.stringify(data));

    // 데이터의 "class" 항목을 alert로 표시
    if (data.length > 0 && data[0].class) {
      alert(data[0].class);
    }
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

// 가상의 fetch 함수
function mockFetch(url) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        json: () => Promise.resolve([{ class: "web" }]),
      });
    }, 1000);
  });
}
