# day-rate-calculator
A day rate calculator for contract workers using [the form]() from Jodie's awesome talk on contracts at EDA. Uses
- [React](https://facebook.github.io/react/)
- the [create-react-app](https://github.com/facebookincubator/create-react-app) bootstrapper
and
- the [material ui](http://www.material-ui.com/) React component library

[Click here](http://day-rate-calculator.surge.sh/) to try the calculator out!

# The form!

## Contracting
So, you’re a Contractor! You pay your own taxes, you don’t get holidays, you probably have to provide your
own computer equipment, and you’re there for a very specific task / project. You can probably be terminated
with very little notice.
The good news is, if you are going to be a Contractor, you can expect to be paid a bit more to compensate
for the lack of job security. When you’re calculating how much you need to earn, you could consider the
following:


| **You want to add up:** | |
|---|---:|
| Salary | 80,000 |
| 3% Kiwisaver Employer minimum contribution | 2,400 |
| Depreciation over three years: cost of a $1500 laptop, you and your client going halves: (1,500/3)/2x your FTE. In this case, we’re assuming you are full time. So your FTE is 1. | 250 |
| Assuming you are having to use your own cellphone for work - $10 a month toward the cost of a decent plan | 120 |
| Total | 82,770 |
| **Now you need to calculate your day rate. Add up:** |
| Annual leave days | 20 |
| Sick leave days | 5 |
| Public holidays (this is based on 2016) | 12 |
| Weekends | 104 |
| Total days you are NOT working | 141 |
| Total days you ARE working (365 minus 141) | 224 |
| Your day rate is $82,770 / 224 | $369.50 |
