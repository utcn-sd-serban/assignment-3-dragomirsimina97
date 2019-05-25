package ro.utcn.spet.example.a1.command;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;
import ro.utcn.spet.example.a1.repository.QuestionRepository;

@Component
@RequiredArgsConstructor
public class CommandImplementation implements CommandFactory{

    private final QuestionRepository questionRepository;


    @Override
    public Command askCommand() {
        return new AskCommand(questionRepository);
    }
}
