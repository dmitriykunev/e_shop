import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Grid from '@material-ui/core/Grid';

const products = [
  { name: 'Продукт 1', desc: 'некая х-ня', price: 'UAH 9.99' },
  { name: 'Продукт 2', desc: 'еще одна х-ня', price: 'UAH 3.45' },
  { name: 'Продукт 3', desc: 'ну и конечно еще эта пое-нь', price: 'UAH 6.51' },
  { name: 'Продукт 4', desc: 'и наконец еще вот эта шняга', price: 'UAH 14.11' },
  { name: 'Доставка', desc: '', price: 'Бесплатно' },
];
const addresses = ['Шевченка 21 кв. 51', 'Киевский район', 'Харьков', '61000', 'Украина'];
const payments = [
  { name: 'Тип карты', detail: 'Visa' },
  { name: 'владелец карты', detail: 'Mr John Smith' },
  { name: 'Номер карты', detail: 'xxxx-xxxx-xxxx-1234' },
  { name: 'Срок действия карты', detail: '04/2024' },
];

const useStyles = makeStyles(theme => ({
  listItem: {
    padding: theme.spacing(1, 0),
  },
  total: {
    fontWeight: '700',
  },
  title: {
    marginTop: theme.spacing(2),
  },
}));

export default function Review() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Детали заказа
      </Typography>
      <List disablePadding>
        {products.map(product => (
          <ListItem className={classes.listItem} key={product.name}>
            <ListItemText primary={product.name} secondary={product.desc} />
            <Typography variant="body2">{product.price}</Typography>
          </ListItem>
        ))}
        <ListItem className={classes.listItem}>
          <ListItemText primary="Сумма" />
          <Typography variant="subtitle1" className={classes.total}>
            $34.06
          </Typography>
        </ListItem>
      </List>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Typography variant="h6" gutterBottom className={classes.title}>
            Доставка
          </Typography>
          <Typography gutterBottom>John Smith</Typography>
          <Typography gutterBottom>{addresses.join(', ')}</Typography>
        </Grid>
        <Grid item container direction="column" xs={12} sm={6}>
          <Typography variant="h6" gutterBottom className={classes.title}>
            Детали оплаты
          </Typography>
          <Grid container>
            {payments.map(payment => (
              <React.Fragment key={payment.name}>
                <Grid item xs={6}>
                  <Typography gutterBottom>{payment.name}</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography gutterBottom>{payment.detail}</Typography>
                </Grid>
              </React.Fragment>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}