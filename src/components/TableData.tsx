import React from "react";
import { Table } from "antd";
import arrowLeft from "../../public/arrow-left.png";
import arrowRight from "../../public/arrow-right.png";
import editIcon from "../../public/editicon.png";

interface BookRecord {
  ID: string;
  book_name: string;
  category: string;
  in_use: string;
  available: string;
  number_of_books: string;
}

const columns = [
  {
    title: "ID",
    dataIndex: "ID",
    key: "ID",
  },
  {
    title: "Book Name",
    dataIndex: "book_name",
    key: "book_name",
  },
  {
    title: "Category",
    dataIndex: "category",
    key: "category",
  },
  {
    title: "In-use",
    dataIndex: "in_use",
    key: "in_use",
  },
  {
    title: "Available",
    dataIndex: "available",
    key: "available",
  },
  {
    title: "Number of Books",
    dataIndex: "number_of_books",
    key: "number_of_books",
    // Only move the edit icon to the far right
    render: (text: string) => (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between", // text on left, icon on right
          paddingRight: 16, // spacing from the right edge
        }}
      >
        <span>{text}</span>
        <img
          src={editIcon}
          alt="Edit"
          style={{ cursor: "pointer", width: 16, height: 16 }}
        />
      </div>
    ),
  },
];

const dataSource: BookRecord[] = [
  {
    ID: "40001",
    book_name: "Bhumi Jain",
    category: "Electronics",
    in_use: "Computer",
    available: "12-12-25",
    number_of_books: "10",
  },
  {
    ID: "40002",
    book_name: "Bhumi Jain",
    category: "Electronics",
    in_use: "Computer",
    available: "12-12-25",
    number_of_books: "10",
  },
  {
    ID: "40003",
    book_name: "Bhumi Jain",
    category: "Electronics",
    in_use: "Computer",
    available: "12-12-25",
    number_of_books: "10",
  },
  {
    ID: "40004",
    book_name: "Bhumi Jain",
    category: "Electronics",
    in_use: "Computer",
    available: "12-12-25",
    number_of_books: "10",
  },
  {
    ID: "40005",
    book_name: "Bhumi Jain",
    category: "Electronics",
    in_use: "Computer",
    available: "12-12-25",
    number_of_books: "10",
  },
  {
    ID: "40006",
    book_name: "Bhumi Jain",
    category: "Electronics",
    in_use: "Computer",
    available: "12-12-25",
    number_of_books: "10",
  },
];

const TableData: React.FC = () => {
  return (
    <div
      style={{
        marginTop: 20,
        border: "1px solid #E9EAEB",
        borderRadius: 12,
        boxShadow: "0 1px 3px 0 #0A0D120F",
        overflow: "hidden",
        width: "95%",
        height: "395px",
        marginLeft: "20px",
        position: "relative",
      }}
    >
      {/* Inline style override for pagination layout */}
      <style>
        {`
          /* Center the entire pagination, but allow absolute positioning of Prev/Next */
          .custom-pagination {
            position: relative;
            text-align: center; 
            display: block !important;
            margin: 16px 0 !important;
          }

          /* Move the "Previous" button to the far left */
          .custom-pagination .ant-pagination-prev {
            position: absolute;
            left: 0;
          }

          /* Move the "Next" button to the far right */
          .custom-pagination .ant-pagination-next {
            position: absolute;
            right: 0;
          }
        `}
      </style>

      <Table
        style={{ width: "100%", margin: 0 }}
        dataSource={dataSource}
        columns={columns}
        rowKey="ID"
        pagination={{
          position: ["bottomCenter"],
          // Apply our custom class to override the layout
          className: "custom-pagination",
          total: 50,
          pageSize: 5,
          defaultCurrent: 1,
          // Keep the same itemRender for styling the buttons
          itemRender: (page, type, originalElement) => {
            if (type === "prev") {
              return (
                <a
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 6,
                    border: "1px solid #D1D5DB",
                    borderRadius: "8px",
                    padding: "4px 12px",
                    color: "#414651",
                    fontWeight: 500,
                    width: "115px",
                    height: "36px",
                    justifyContent: "center",
                    marginLeft: '20px'
                  }}
                >
                  <img
                    src={arrowLeft}
                    alt="arrowLeft"
                    style={{ width: 16, height: 16 }}
                  />
                  Previous
                </a>
              );
            }
            if (type === "next") {
              return (
                <a
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 6,
                    border: "1px solid #D1D5DB",
                    borderRadius: "8px",
                    padding: "4px 12px",
                    color: "#414651",
                    fontWeight: 500,
                    width: "88px",
                    height: "36px",
                    justifyContent: "center",
                    marginRight: '20px'
                  }}
                >
                  Next
                  <img
                    src={arrowRight}
                    alt="arrowRight"
                    style={{ width: 16, height: 16 }}
                  />
                </a>
              );
            }
            return originalElement;
          },
        }}
      />
    </div>
  );
};

export default TableData;
