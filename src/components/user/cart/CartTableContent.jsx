import { Link } from "react-router-dom";
import CartItem from "./CartItem";

export default function CartTableContent() {
  return (
    <div className="row">
      <div className="col-12">
        <form action="#">
          <div className="cart-table-content">
            <div className="table-content table-responsive">
              <table>
                <thead>
                  <tr>
                    <th className="width-thumbnail">Sản phẩm</th>
                    <th className="width-name"></th>
                    <th className="width-price">Giá</th>
                    <th className="width-quantity">Số lượng</th>
                    <th className="width-subtotal">Thành tiền</th>
                    <th className="width-remove"></th>
                  </tr>
                </thead>
                <tbody>
                  {[...Array(3)].map((_, index) => (
                    <CartItem key={index} />
                  ))}
                </tbody>
              </table>
            </div>
            <div className="cart-shiping-update-wrapper">
              <div className="continure-clear-btn">
                <div className="continure-btn">
                  <a href="#">Tiếp tục mua sắm</a>
                </div>
                <div className="clear-btn">
                  <a href="#">
                    <i className="fal fa-times"></i> Xóa giỏ hàng
                  </a>
                </div>
              </div>
              <div className="update-btn">
                <a href="cart.html">Cập nhật giỏ hàng</a>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
