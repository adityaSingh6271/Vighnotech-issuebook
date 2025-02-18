import React from "react";
import { Table } from "antd";

// Define your Book interface
export interface Book {
  book_id: string;
  book_name: string;
  department: string;
  book_author: string;
  date_of_borrowing: string;
}

// Define the columns using the interface keys
const columns = [
  {
    title: "Book ID",
    dataIndex: "book_id",
    key: "book_id",
  },
  {
    title: "Book Name",
    dataIndex: "book_name",
    key: "book_name",
  },
  {
    title: "Department",
    dataIndex: "department",
    key: "department",
  },
  {
    title: "Book Author",
    dataIndex: "book_author",
    key: "book_author",
  },
  {
    title: "Date of Borrowing",
    dataIndex: "date_of_borrowing",
    key: "date_of_borrowing",
  },
  {
    title: "Actions",
    key: "actions",
    render: () => <a>Edit</a>,
  },
];

// Create a sample dataSource using the Book interface
const dataSource: Book[] = [
  {
    book_id: "1",
    book_name: "The Great Gatsby",
    department: "Literature",
    book_author: "F. Scott Fitzgerald",
    date_of_borrowing: "2023-03-01",
  },
  {
    book_id: "2",
    book_name: "1984",
    department: "Fiction",
    book_author: "George Orwell",
    date_of_borrowing: "2023-03-05",
  },
  {
    book_id: "3",
    book_name: "Clean Code",
    department: "Programming",
    book_author: "Robert C. Martin",
    date_of_borrowing: "2023-03-10",
  },
];

const TableData: React.FC = () => {
  return (
    <div style={{ margin: 20 }}>
      <Table
        dataSource={dataSource}
        columns={columns}
        // Customize pagination here
        pagination={{
          // Force multiple pages to appear for demonstration
          total: 50,             // Total number of items
          pageSize: 5,           // Items per page
          defaultCurrent: 1,     // Starting page
          // Replace default arrows with text
          itemRender: (page, type, originalElement) => {
            if (type === "prev") {
              return <a>Previous</a>;
            }
            if (type === "next") {
              return <a>Next</a>;
            }
            return originalElement;
          },
        }}
        rowKey="book_id"
      />
    </div>
  );
};

export default TableData;
