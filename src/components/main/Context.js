import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Icon from '@material-ui/core/Icon';
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const styles = theme => ({
  layout: {
    flex: 1,
   display : 'flex',
   flexDirection : 'column',
    overflowX: 'inherit',
    overflowY: 'inherit',
    width: "auto",
    [theme.breakpoints.up(1100 + theme.spacing.unit * 3 * 2)]: {
      minWidth: 1100,
      marginLeft: "auto",
      marginRight: "auto"
    },
  },
  toolbarMain: {
    borderBottom: `1px solid ${theme.palette.grey[300]}`
  },
  toolbarTitle: {
    flex: 1
  },
  toolbarSecondary: {
    justifyContent: "space-between"
  },
  mainFeaturedPost: {
    backgroundColor: "#1C90FB",
    color: theme.palette.common.white,
    marginBottom: theme.spacing.unit * 2
  },
  mainFeaturedPostContent: {
    padding: `${theme.spacing.unit - 2}%`,
    [theme.breakpoints.up("md")]: {
      paddingRight: 0
    }
  },
  mainGrid: {
    marginTop: theme.spacing.unit * 3
  },
  card: {
    display: "flex"
  },
  cardDetails: {
    flex: 1
  },  
  sidebarSection: {
    marginTop: theme.spacing.unit * 3
  }
});

const wespaceColor = {
  backgroundColor: "gray"
};

/**
 * 샘플 데이터 => 이후 데이터 호출
 */
const featuredPosts = [
  {
    title: "공유 문서 목록",
    date: "Nov 12",
    description: [
      "1. 개발부서 체크리스트 확인요청",
      "2. 체육대회 일정 공지"
    ]
  },
  {
    title: "개인 문서 목록",
    date: "Nov 11",
    description: [
      "1. 19년 1차 보고서 확인 요청",
      "2. 진급 대상자 명단 확인 요청"
    ]
  }
];

function NoteMainPage(props) {
  const { classes } = props;

  return (
    <React.Fragment>
      <CssBaseline />
      <div className={classes.layout}>
        <main>
          {/* Main featured post */}
          <Paper className={classes.mainFeaturedPost}>
            <Grid container>
              <Grid item md={12}>
                <div
                  className={classes.mainFeaturedPostContent}
                  style={wespaceColor}
                >
                  <Typography
                    component="h1"
                    variant="h4"
                    color="inherit"
                    gutterBottom
                  >
                    <b>위하고</b> 님, 하루의 시작을 <b>WESPACE</b>와 함께하세요!
                  </Typography>
                  <br />
                  <Typography
                    component="h5"
                    variant="h6"
                    color="inherit"
                    gutterBottom
                  >
                    오늘도 아래 가득 차있는 업무를 처리해야 합니다.<br />
                    이야~씐난다<br />
                    고생하십셔
                  </Typography>
                </div>
              </Grid>
            </Grid>
          </Paper>
          {/* End main featured post */}
          {/* Sub featured posts */}
          <Grid container spacing={40} className={classes.cardGrid}>
            {featuredPosts.map(post => (
              <Grid item key={post.title} xs={6} md={6}>
                <Card className={classes.card}>
                  <div className={classes.cardDetails}>
                    <CardContent>
                      <Typography component="h2" variant="h5">
                        {post.title}
                      </Typography>
                      <Typography      variant="subtitle1" color="textSecondary"    align="right">
                        {post.date}
                      </Typography>
                      <br />
                      <Typography variant="subtitle1" paragraph>
                        {post.description}
                      </Typography>
                      <br />
                      <Typography variant="subtitle1" color="primary" align="right">
                        자세히 알아보기...
                      </Typography>
                    </CardContent>
                  </div>
                </Card>
              </Grid>
            ))}
          </Grid>
        </main>
      </div>
      {/* Footer */}

      {/* End footer */}
    </React.Fragment>
  );
}

NoteMainPage.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(NoteMainPage);
