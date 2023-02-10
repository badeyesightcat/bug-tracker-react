const colors = ['rgb(12, 12, 12)', 'rgb(3, 32, 220)', 'rgb(214, 242, 35)'];
const levels = ['High', 'Medium', 'Low'];

export default function (priority) {
  return {
    level: levels[priority - 1],
    color: colors[priority - 1],
  };
}
