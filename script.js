// 职业详细信息数据
const jobDetails = [
    {
        title: "宠物侦探",
        image: "images/pet-detective.jpg",
        description: "宠物侦探是一种专门帮助寻找走失宠物的职业。他们通常使用追踪技术、社区调查以及与宠物主人合作来寻找失踪的宠物。这个职业需要极大的耐心和对动物的热爱。"
    },
    {
        title: "美食造型师",
        image: "images/food-stylist.jpg",
        description: "美食造型师的工作是让食物看起来更加诱人。他们为广告、菜单和食谱设计食物的摆盘，甚至使用一些特殊的技巧让食物在镜头前保持完美。"
    },
    {
        title: "AI声音生成师",
        image: "images/voice-generator.jpg",
        description: "AI声音生成师是一种新兴职业，他们训练和调试人工智能模型，以生成自然、富有情感的语音。这项工作需要对编程和声音设计有深入了解。"
    }
];

// 获取模态框元素
const modal = document.getElementById("jobModal");
const modalTitle = document.getElementById("modalTitle");
const modalImage = document.getElementById("modalImage");
const modalDescription = document.getElementById("modalDescription");
const closeModal = document.querySelector(".close");

// 显示模态框并填充内容
function showDetails(index) {
    const job = jobDetails[index];
    modalTitle.textContent = job.title;
    modalImage.src = job.image;
    modalImage.alt = job.title;
    modalDescription.textContent = job.description;
    modal.style.display = "flex"; // 显示模态框
}

// 关闭模态框
closeModal.onclick = function () {
    modal.style.display = "none";
};

// 点击模态框外部关闭模态框
window.onclick = function (event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
};