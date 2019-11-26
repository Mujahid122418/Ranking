import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import { withRouter } from "react-router-dom";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import oil from "./oil.png";
import "./products.css";
import Circle from 'react-circle';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
import Loader from 'react-loader-spinner'
import { connect } from "react-redux"
import { Getfood } from "../../../Redux/Epics/food"
import { Url } from "../../../shared"
const StyledTableCell = withStyles(theme => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles(theme => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.background.default,
    },
  },
}))(TableRow);

function createData(key, name, calories, fat, Rating) {
  return { key, name, calories, fat, Rating };
}

const rows = [
  createData(1, "Garden Ofsdfsd Life Dr. Formulated CBD + Sleep", 6.0, 21, 100),
  createData(2, "Garden Of Life Dr. Formulated CBD + Sleep", 9.0, 21, 100),
  createData(3, "Garden Of Life Dr. Formulated CBD + Sleep", 16.0, 21, 100),
  createData(4, "Garden Of Life Dr. Formulated CBD + Sleep", 3.7, 21, 100),
  createData(5, "Garden Of Life Dr. Formulated CBD + Sleep", 16.0, 21, 100),
  createData(6, "Garden Of Life Dr. Formulated CBD + Sleep", 6.0, 21, 100),
  createData(7, "Garden Of Life Dr. Formulated CBD + Sleep", 9.0, 21, 100),
  createData(8, "Garden Of Life Dr. Formulated CBD + Sleep", 16.0, 21, 100),
  createData(9, "Garden Of Life Dr. Formulated CBD + Sleep", 3.7, 21, 100),
  createData(10, "Garden Of Life Dr. Formulated CBD + Sleep", 16.0, 21, 100),

];

// const useStyles = makeStyles(theme => ({
//   root: {
//     width: '100%',
//     marginTop: theme.spacing(3),
//     overflowX: 'auto',
//   },
//   table: {
//     minWidth: 700,
//   },
// }));

class ProductTable extends React.Component {
  //   const classes = useStyles();
  componentDidMount() {
    this.props.getProduct()
  }
  render() {
    console.log(this.props.rows)
    const products = this.props.rows
    return (
      <div>


        <Paper className="products">
          <Table className="products-table">
            <TableHead>
              <TableRow>
                <StyledTableCell>Products</StyledTableCell>
                <StyledTableCell align="center">Uses</StyledTableCell>
                <StyledTableCell align="center">Rating</StyledTableCell>
                <StyledTableCell align="center">Price</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>

              {products ? products.map(row => (

                <StyledTableRow key={row._id} onClick={() => this.props.history.push(`/productranking/${row._id}`)} className="p-table-row" >
                  {/* {`/productranking`} */}
                  <StyledTableCell component="th" scope="row">

                    <img width="40" src={Url + "uploads/" + row.image} alt="" /> {row.name}

                  </StyledTableCell>
                  <StyledTableCell align="center"> {row.numberRating}</StyledTableCell>
                  <StyledTableCell align="center"><Circle progress={row.avgRating * 20} size="70" /></StyledTableCell>
                  <StyledTableCell align="center">{row.price}</StyledTableCell>
                </StyledTableRow>
              )) : <div className="loader-my"><Loader type="TailSpin" color="#00BFFF" height={100} width={100}  /> </div>}
            </TableBody>
          </Table>
        </Paper>
      </div>
    );
  }
}

const mapStateToProps = ({ Foods: { foods } }) => ({
  rows: foods
});
const mapDispatchToProps = dispacth => ({
  getProduct: () => dispacth(Getfood())
})

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(ProductTable))