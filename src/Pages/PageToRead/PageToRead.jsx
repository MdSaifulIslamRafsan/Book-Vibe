import { useLoaderData } from "react-router-dom";
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid } from "recharts";
import { getLocalStorageReadData } from "../../Utilities/Read";

const colors = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "red", "pink" , "skyblue" , "purple"];



const getPath = (x, y, width, height) => {
  return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${
    y + height / 3
  }
  ${x + width / 2}, ${y}
  C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${
    x + width
  }, ${y + height}
  Z`;
};

const TriangleBar = (props) => {
  const { fill, x, y, width, height } = props;

  return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
};

const PageToRead = () => {
    const booksData = useLoaderData();
    const getData = getLocalStorageReadData()

    const data = booksData.filter((book)=> getData.includes(book?.bookId));
    console.log(data);



  return (
    <BarChart
    className="my-10 mx-auto bg-[#13131308] py-8 rounded-xl"
      width={1040}
      height={400}
      data={data}
      margin={{
        top: 20,
        right: -20,
        left: -70,
        bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis className="text-[12px]" dataKey="bookName" />
      <YAxis />
      <Bar
        dataKey="totalPages"
        fill="#8884d8"
        shape={<TriangleBar />}
        label={{ position: "top" }}
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={colors[index % 20]} />
        ))}
      </Bar>
    </BarChart>
  );
};

export default PageToRead;
