import React from "react";
import PropTypes from "prop-types";
import { Box, Link, makeStyles } from "@material-ui/core";
import Avatar from "../Avatar";
import * as typeMessages from "constants/typeMessage";

MessageBox.propTypes = {
  content: PropTypes.string.isRequired,
  timestamp: PropTypes.string.isRequired,
  name: PropTypes.string,
  position: PropTypes.string,
  type: PropTypes.string,
  avatar: PropTypes.string,
};

MessageBox.defaultProps = {
  name: "",
  position: "left",
  type: 0,
  avatar: "",
};

const useStyles = makeStyles({
  messageBoxLeft: {
    display: "flex",
    justifyContent: "flex-start",
    padding: "0px 5px",
    margin: "8px 0px",
    "& .messageBoxLeftHeader": {
      display: "flex",
      alignItems: "center",
      marginLeft: "12px",
      width: "100%",
      "& h5": {
        fontSize: "15px",
        fontWeight: "700",
        textTransform: "none",
        color: "#223645",
        margin: "0",
      },
      "& h6": {
        fontSize: "11px",
        fontWeight: "400",
        textTransform: "none",
        color: "#647589",
        margin: "0px 0px 0px 20px",
      },
    },
    "& .messageBoxLeftContent": {
      display: "flex",
      alignItems: "center",
      width: "fit-content",
      maxWidth: "100%",
      wordBreak: "break-all",
      fontSize: "15px",
      fontWeight: "600",
      color: "#223645",
      backgroundColor: "#d5d9dc",
      margin: "3px 0px 5px 12px",
      padding: "12px 20px",
      borderRadius: "20px",
      borderTopLeftRadius: "0px",
      "& .otherFile": {
        color: "inherit",
      },
    },
  },
  messageBoxRight: {
    display: "flex",
    justifyContent: "flex-end",
    padding: "0px 5px",
    margin: "8px 0px",
    "& .messageBoxRightContainer": {
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-end",
      width: "100%",
      "& .messageBoxRightContent": {
        display: "flex",
        justifyContent: "inherit",
        alignItems: "center",
        width: "fit-content",
        maxWidth: "100%",
        wordBreak: "break-all",
        fontSize: "15px",
        fontWeight: "600",
        color: "white",
        backgroundColor: "#1c9dea",
        margin: "0px 0px 5px 0px",
        padding: "12px 20px",
        borderRadius: "30px",
        borderBottomRightRadius: "0px",
        "& .otherFile": {
          color: "inherit",
        },
      },
      "& h6": {
        fontSize: "11px",
        fontWeight: "400",
        textTransform: "none",
        color: "#647589",
        margin: "0px",
      },
    },
  },
  uploadPhoto: {
    height: "170px",
    borderRadius: "30px",
    margin: "5px 0px 5px 12px",
	},
	sticker: {
		height: "100px",
		width: "100px",
		marginLeft: 12,
	}
});

function MessageBox(props) {
  const classes = useStyles();
  const { name, avatar, position, content, timestamp, type } = props;

  const renderContent = () => {
    if (type === typeMessages.TEXT) {
      return content;
    }
    if (type === typeMessages.STICKER) {
      return (
        <img
					className={classes.sticker}
          alt="sticker"
          src={content}
        />
      );
    }
    if (type === typeMessages.PHOTO) {
      return (
        <img className={classes.uploadPhoto} alt="uploadPhoto" src={content} />
      );
    }
    if (type === typeMessages.OTHER_FILE) {
      const name = content.slice(
        content.indexOf("%2F") + 3,
        content.indexOf("?alt")
      );
      return (
        <Link className="otherFile" href={content} target="_blank">
          {name}
        </Link>
      );
    }
  };

  if (position === "left") {
    return (
      <Box className={classes.messageBoxLeft}>
        <Avatar src={avatar} />
        <span>
          <div className="messageBoxLeftHeader">
            <h5>{name}</h5>
            <h6>{timestamp}</h6>
          </div>
          {type === typeMessages.STICKER || type === typeMessages.PHOTO ? (
            renderContent()
          ) : (
            <div className="messageBoxLeftContent">{renderContent()}</div>
          )}
        </span>
      </Box>
    );
  } else if (position === "right") {
    return (
      <Box className={classes.messageBoxRight}>
        <div className="messageBoxRightContainer">
          {type === typeMessages.STICKER || type === typeMessages.PHOTO ? (
            renderContent()
          ) : (
            <div className="messageBoxRightContent">{renderContent()}</div>
          )}
          <h6>{timestamp}</h6>
        </div>
      </Box>
    );
  }
}

export default MessageBox;
