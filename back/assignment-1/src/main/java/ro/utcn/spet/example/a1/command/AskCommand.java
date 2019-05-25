package ro.utcn.spet.example.a1.command;

import lombok.RequiredArgsConstructor;
import ro.utcn.spet.example.a1.dto.QuestionDTO;
import ro.utcn.spet.example.a1.entity.Question;
import ro.utcn.spet.example.a1.repository.QuestionRepository;

@RequiredArgsConstructor
public class AskCommand implements Command {

    private final QuestionRepository questionRepository;

    @Override
    public QuestionDTO execute(QuestionDTO dto) {
        Question question = new Question();
        question.setTitle(dto.getTitle());
        question.setText(dto.getText());
        question.setAuthor(dto.getAuthor());
        question.setCreationDate(dto.getCreationDate());
        return QuestionDTO.ofEntity(questionRepository.save(question));
    }
}
