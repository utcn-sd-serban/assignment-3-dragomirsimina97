package ro.utcn.spet.example.a1.command;

import ro.utcn.spet.example.a1.dto.QuestionDTO;

public interface Command {

    QuestionDTO execute (QuestionDTO dto);
}
