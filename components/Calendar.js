import React from "react";
import Template from "./Template";

const Calendar = () => {
  return (
    <>
      <Template
        title="Calendar"
        source="list"
        author=""
        authorFrom=""
        html={`
        <div class="calendar">
        <div class="calendar-header">
          <div class="calendar-year">Dec 2019</div>
          <div class="calendar-action">
            <i class="fal fa-angle-left"></i>
            <i class="fal fa-angle-right"></i>
          </div>
        </div>
        <div class="calendar-content">
          <table class="calendar-table">
            <thead>
              <tr>
                <th>Sun</th>
                <th>Mon</th>
                <th>Tue</th>
                <th>Wed</th>
                <th>Thu</th>
                <th>Fri</th>
                <th>Sat</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>2</td>
                <td>3</td>
                <td>4</td>
                <td>5</td>
                <td>6</td>
                <td>7</td>
              </tr>
              <tr>
                <td>8</td>
                <td>9</td>
                <td>10</td>
                <td>11</td>
                <td>12</td>
                <td>13</td>
                <td>14</td>
              </tr>
              <tr>
                <td>15</td>
                <td>16</td>
                <td>17</td>
                <td>18</td>
                <td>19</td>
                <td>20</td>
                <td>21</td>
              </tr>
              <tr>
                <td>22</td>
                <td>23</td>
                <td>24</td>
                <td>25</td>
                <td>26</td>
                <td>27</td>
                <td>28</td>
              </tr>
              <tr>
                <td>29</td>
                <td>30</td>
                <td>31</td>
                <td class="other">1</td>
                <td class="other">2</td>
                <td class="other">3</td>
                <td class="other">4</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
        `}
        css={`
          .calendar {
            padding: 3rem 2rem;
            width: 100%;
            background-color: white;
            box-shadow: 0 0 15px 0 rgba(0, 0, 0, 0.05);
            border-radius: 12px;
          }
          .calendar-header {
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin-bottom: 1.5rem;
            padding: 0 1rem;
          }
          .calendar-year {
            color: #1a2633;
            font-size: 1.8rem;
            font-weight: normal;
          }
          .calendar-action {
            font-size: 3rem;
            color: var(--primary);
          }
          .calendar-action i {
            cursor: pointer;
          }
          .calendar-action i:last-child {
            margin-left: 3rem;
          }
          .calendar-table {
            width: 100%;
            vertical-align: middle;
            table-layout: fixed;
          }
          .calendar-table th {
            color: #999;
            font-size: 1.2rem;
          }
          .calendar-table th,
          .calendar-table td {
            padding: 1rem;
            border-radius: 4px;
            text-align: center;
          }
          .calendar-table td {
            vertical-align: middle;
            width: 3.5rem;
            height: 3.5rem;
            cursor: pointer;
          }
          .calendar-table td.other {
            color: #999;
            opacity: 0.5;
          }
          .calendar-table td:hover {
            color: white;
            background-color: var(--primary);
          }
          @media screen and (max-width: 767px) {
            .calendar {
              padding: 1.5rem;
            }
            .calendar-header {
              margin-bottom: 5px;
            }
            .calendar-content {
              width: 100%;
              overflow-x: auto;
            }
            .calendar td {
              font-size: 1.2rem;
              width: auto;
              height: auto;
            }
          }
        `}
      ></Template>
    </>
  );
};

export { Calendar };
