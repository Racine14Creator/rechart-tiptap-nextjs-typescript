import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";

const PieChartPlot = () => {
    const data = [
      {
        name: "Twitter",
        value: 80,
      },
      {
        name: "Facebook",
        value: 20,
      },
      
    ];

    const colors = [
        "#1E468C",
        "#5B86E5",
    ];

    return (
        <>
          <ResponsiveContainer width="100%" height="100%">
            <PieChart width={730} height={250}>
              <Pie
                data={data}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                stroke=""
                // fill="#8884d8"
                // label
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={colors[index]} />
                ))}
              </Pie>
              <Tooltip/>
            </PieChart>
          </ResponsiveContainer>
        </>
      );

  }
  export default PieChartPlot; 