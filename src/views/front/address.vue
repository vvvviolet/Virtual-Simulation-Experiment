<template>
  <div class="npv-calculator">
    <h2 class="title">期望净现值计算器</h2>
    <p class="description">
      净现值（Net Present Value, NPV）是一种衡量投资项目可行性的方法，通过将未来现金流折现到现在，以评估项目的价值。净现值的计算公式如下：
    </p>
    <pre class="formula">
      NPV = -Initial Investment + ∑(Cash Flow / (1 + Discount Rate)^n)
    </pre>
    <div class="input-section">
      <table class="cash-flow-table">
        <thead>
          <tr>
            <th>年份</th>
            <th>现金流</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(cashFlow, index) in cashFlows" :key="index">
            <td>
              <input type="number" v-model="years[index]">
            </td>
            <td>
              <input type="number" v-model="cashFlows[index]">
            </td>
            <td>
              <button class="remove-button" @click="removeCashFlow(index)">
                删除
              </button>
            </td>
          </tr>
        </tbody>
      </table>
      <button class="add-cashflow-button" @click="addCashFlow">
        添加现金流
      </button>
      <div class="discount-rate-section">
        <label for="discount-rate">折现率:</label>
        <input type="number" id="discount-rate" v-model="discountRate">
      </div>
    </div>
    <div class="button-section">
      <button class="calculate-button" @click="calculateNPV">计算NPV</button>
    </div>
    <div class="npv-section" v-if="npv !== null">
      <p class="npv-label">NPV:</p>
      <p class="npv-result">{{ npv }}</p>
    </div>
    <button class="download-button" @click="downloadData">下载资料</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cashFlows: [],
      years: [],
      discountRate: null,
      npv: null
    };
  },
  methods: {
    addCashFlow() {
      this.years.push('');
      this.cashFlows.push('');
    },
    removeCashFlow(index) {
      this.years.splice(index, 1);
      this.cashFlows.splice(index, 1);
    },
    calculateNPV() {
      // 计算净现值的逻辑
    },
    downloadData() {
      // 下载资料的逻辑
    }
  }
};
</script>

<style>
.npv-calculator {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f5f5f5;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  font-family: Arial, sans-serif;
}

.title {
  text-align: center;
 
  color: #333;
}

.description {
  color: #777;
  margin-bottom: 20px;
}

.formula {
  background-color: #e9e9e9;
  padding: 10px;
  border-radius: 5px;
  overflow-x: auto;
  white-space: pre;
}

.input-section {
  margin-bottom: 20px;
}

.cash-flow-table {
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 10px;
}

.cash-flow-table th,
.cash-flow-table td {
  padding: 5px;
  text-align: center;
}

.discount-rate-section {
  text-align: right;
}

.button-section {
  text-align: center;
  margin-bottom: 20px;
}

.calculate-button {
  padding: 10px 20px;
  background-color: #4CAF50;
  color: #fff;
  border: none;
  border-radius: 3px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.calculate-button:hover {
  background-color: #45a049;
}

.npv-section {
  text-align: center;
  margin-bottom: 20px;
}

.npv-label {
  font-weight: bold;
  color: #333;
  margin-bottom: 5px;
}

.npv-result {
  font-size: 24px;
  color: #4CAF50;
}

.download-button {
  position: fixed;
  top: 80px;
  right: 20px;
  padding: 10px 20px;
  background-color: #f44336;
  color: #fff;
  border: none;
  border-radius: 3px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.download-button:hover {
  background-color: #d32f2f;
}

.add-cashflow-button {
  padding: 10px 20px;
  background-color: #2196F3;
  color: #fff;
  border: none;
  border-radius: 3px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s;
  margin-top: 10px;
}

.add-cashflow-button:hover {
  background-color: #1976D2;
}

.remove-button {
  padding: 5px 10px;
  background-color: #F44336;
  color: #fff;
  border: none;
  border-radius: 3px;
  font-size: 14px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.remove-button:hover {
  background-color: #D32F2F;
}
</style>
